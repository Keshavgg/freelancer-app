"use server";

import { redirect } from "next/navigation";
import db from "@/DB/index";
import { auth, NextSignIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";

export async function continueWithGoogle() {
    await NextSignIn("google");
}

export async function continueWithGitHub() {
    await NextSignIn("github");
}

export async function continueWithEmail(formData: any) {
    await NextSignIn("credentials", formData);
    redirect("/welcome");
}

export async function signOutAction() {
    await signOut({ redirectTo: "/" });
}

export async function updateUserProfileFreelancer(formData: any) {
    const session = await auth();
    if (!session) throw new Error("Kindly log in");

    const name = formData.get("name");
    const userName = formData.get("username");
    const bio = formData.get("bio");
    const location = formData.get("location");
    const experience = formData.get("experience");
    const skills = JSON.parse(formData.get("skills"));

    await db.user.update({
        where: {
            id: session.user.id,
        },
        data: {
            name: name,
            username: userName,
            role: "freelancer",
            skills,
            profile: {
                bio,
                location,
                experience,
            },
        },
    });

    // Redirecting
    redirect("/freelancer/dashboard");
}

export async function updateUserProfileClient(formData: any) {
    const session = await auth();
    if (!session) throw new Error("Kindly log in");

    const name = formData.get("name");
    const userName = formData.get("username");
    const bio = formData.get("bio");
    const location = formData.get("location");

    await db.user.update({
        where: {
            id: session.user.id,
        },
        data: {
            name: name,
            username: userName,
            role: "client",
            profile: {
                bio,
                location,
            },
        },
    });

    // Redirecting
    redirect("/client/dashboard");
}

export async function freelancerSettingsUpdate(formData: FormData) {
    const session = await auth();
    if (!session) throw new Error("Kindly log in");

    const bio = formData.get("bio");
    const collegeName = formData.get("collegeName");
    const languages = JSON.parse(formData.get("languages") as string);
    const skills = JSON.parse(formData.get("skills") as string);
    const email = formData.get("email");

    await db.user.update({
        where: {
            id: session.user.id,
        },
        data: {
            email: email as string,
            skills: skills,
            profile: {
                bio,
                languages,
                collegeName,
            } as object,
        },
    });

    revalidatePath(`${session.user.role}/settings`);
}

export async function clientSettingsUpdate(formData: FormData) {
    const session = await auth();
    if (!session) throw new Error("Kindly log in");

    const bio = formData.get("bio");
    const languages = JSON.parse(formData.get("languages") as string);
    const location = formData.get("location");
    const email = formData.get("email");

    await db.user.update({
        where: {
            id: session.user.id,
        },
        data: {
            email: email as string,
            profile: {
                bio,
                languages,
                location,
            } as object,
        },
    });

    revalidatePath(`${session.user.role}/settings`);
}

export async function supportPageSubmission(formData: FormData) {
    const session = await auth();
    if (!session) throw new Error("Kindly log in");

    const name = formData.get("name");
    const email = formData.get("email");
    const description = formData.get("description");

    await db.support.create({
        data: {
            name: name as string,
            email: email as string,
            description: description as string,
        },
    });

    redirect("/support-request");
}

export async function submitProject(formData: FormData) {
    try {
        console.log(formData);

        const session = await auth();
        const title = formData.get("title");
        const description = formData.get("description");
        const deadline = formData.get("deadline");
        const skillsString: string | null = formData.get("skills") as
            | string
            | null;
        const skillsArray: string[] = skillsString
            ? skillsString
                  .split(",")
                  .map((skill) => skill.trim())
                  .filter((skill) => skill !== "")
            : [];
        const budget = formData.get("budget");
        const todos = JSON.parse(formData.get("todos") as string);

        await db.project.create({
            data: {
                title: title! as string,
                description: description! as string,
                budget: +budget! as number,
                client: { connect: { id: session?.user.id } },
                // @ts-ignore
                deadline: deadline!,
                todos: todos,
                skills: skillsArray,
                status: "Open",
            },
        });

        return { success: true };
    } catch (error) {
        console.error("Error submitting project:", error);
        return {
            success: false,
            error: "Failed to submit project. Please try again.",
        };
    }
}

export async function proposalSubmission(
    projectId: string,
    formData: FormData
) {
    const session = await auth();
    if (!session) throw new Error("Kindly log in");

    const description = formData.get("description") as string;
    const workExperience = formData.get("workExperience") as string;
    const compensation = formData.get("compensation") as string;
    const timeNeeded = formData.get("timeNeeded") as string;
    const skills = formData.get("skills") as string;

    console.log(formData, projectId);

    await db.proposals.create({
        data: {
            compensation: +compensation,
            description,
            experience: workExperience,
            freelancer: { connect: { id: session?.user.id } },
            // @ts-ignore
            Project: { connect: { id: projectId } },
            skills,
            time_needed: timeNeeded,
        },
    });

    redirect("/proposal-submission");
}
