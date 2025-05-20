import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";
import { Bold, Italic, Underline, List, Link, Image } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Slider } from "@/components/ui/slider";

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

export default function JobApplicationModal({
  isOpen,
  onClose,
  jobTitle,
}: JobApplicationModalProps) {
  const [coverLetter, setCoverLetter] = useState("");
  const [price, setPrice] = useState(2000);
  const [freelancerOpinion, setFreelancerOpinion] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
  };

  const handleClear = () => {
    setCoverLetter("");
    setPrice(2000);
    setFreelancerOpinion("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-[#FFFCF2]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#252422]">
            Apply for {jobTitle}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="coverLetter" className="text-[#252422]">
              Cover Letter <span className="text-red-500">*</span>
            </Label>
            <div className="bg-[#F3EFE4] p-1 rounded-md flex flex-wrap gap-1">
              <Toggle aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Toggle bullet list">
                <List className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Add link">
                <Link className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Add image">
                <Image className="h-4 w-4" />
              </Toggle>
            </div>
            <Textarea
              id="coverLetter"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              className="min-h-[200px] bg-[#FFFCF2] border-[#CCC5B9]"
              placeholder="Write your cover letter here..."
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price" className="text-[#252422]">
              Negotiable Price <span className="text-red-500">*</span>
            </Label>
            <div className="flex items-center space-x-4">
              <Slider
                id="price"
                min={1000}
                max={9999}
                step={100}
                value={[price]}
                onValueChange={(value) => setPrice(value[0])}
                className="flex-grow"
              />
              <Input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-20 bg-[#FFFCF2] border-[#CCC5B9]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="freelancerOpinion" className="text-[#252422]">
              Freelancer Opinion
            </Label>
            <Textarea
              id="freelancerOpinion"
              value={freelancerOpinion}
              onChange={(e) => setFreelancerOpinion(e.target.value)}
              className="min-h-[100px] bg-[#FFFCF2] border-[#CCC5B9]"
              placeholder="Share your thoughts or ask questions about the job..."
            />
          </div>
          <DialogFooter className="sm:justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={handleClear}
              className="bg-[#E0DACF] text-[#252422] hover:bg-[#ff7a7a]"
            >
              Clear
            </Button>
            <Button
              type="submit"
              className="bg-[#335239] text-white hover:bg-[#43a1ff]"
            >
              Submit Application
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
