import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

function BatchModel() {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Batch</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New Batch</DialogTitle>
                        <DialogDescription>
                            Enter details to add a new batch
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        {/* Batch Name */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="batchName" className="text-right">
                                Batch Name
                            </Label>
                            <Input
                                id="batchName"
                                placeholder="Enter Batch Name"
                                className="col-span-3"
                            />
                        </div>
                        {/* Trainer Selection */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="trainer" className="text-right">
                                Trainer
                            </Label>
                            <Select>
                                <SelectTrigger className="w-full col-span-3">
                                    <SelectValue placeholder="Select Trainer" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Trainer1">Trainer 1</SelectItem>
                                    <SelectItem value="Trainer2">Trainer 2</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        {/* Status */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="status" className="text-right">
                                Status
                            </Label>
                            <Select>
                                <SelectTrigger className="w-full col-span-3">
                                    <SelectValue placeholder="Select Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Active">Active</SelectItem>
                                    <SelectItem value="Inactive">Inactive</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        {/* Number of Students */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="noOfStudents" className="text-right">
                                No. of Students
                            </Label>
                            <Input
                                id="noOfStudents"
                                type="number"
                                placeholder="Enter Number"
                                className="col-span-3"
                            />
                        </div>
                        {/* Course Selection */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="course" className="text-right">
                                Course
                            </Label>
                            <Select>
                                <SelectTrigger className="w-full col-span-3">
                                    <SelectValue placeholder="Select Course" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="UI/UX">UI/UX</SelectItem>
                                    <SelectItem value="Full Stack">Full Stack</SelectItem>
                                    <SelectItem value="Computer Fundamentals">Computer Fundamentals</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        {/* Description */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input
                                id="description"
                                placeholder="Enter Batch Description"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Add Batch</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default BatchModel;
