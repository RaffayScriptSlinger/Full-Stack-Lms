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

function StudentModel() {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Student</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Student</DialogTitle>
                        <DialogDescription>
                            Enter details to add a new student
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                       
                        {/* First Name */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="firstName" className="text-right">
                                First Name
                            </Label>
                            <Input
                                id="firstName"
                                placeholder="Enter First Name"
                                className="col-span-3"
                            />
                        </div> 
                         {/* Last Name */}
                         <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="lastName" className="text-right">
                                Last Name
                            </Label>
                            <Input
                                id="lastName"
                                placeholder="Enter Last Name"
                                className="col-span-3"
                            />
                        </div>
                        {/* Education */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="education" className="text-right">
                                Education
                            </Label>
                            <Input
                                id="education"
                                placeholder="Enter Education"
                                className="col-span-3"
                            />
                        </div>
                        {/* CNIC */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="cnic" className="text-right">
                                CNIC
                            </Label>
                            <Input
                                id="cnic"
                                placeholder="Enter CNIC"
                                className="col-span-3"
                            />
                        </div>
                        {/* Email Address */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                Email 
                            </Label>
                            <Input
                                id="email"
                                placeholder="Enter Email Address"
                                className="col-span-3"
                            />
                        </div>
                        {/* Gender */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="gender" className="text-right">
                                Gender
                            </Label>
                            <Select>
                                <SelectTrigger className="w-full col-span-3">
                                    <SelectValue placeholder="Select Gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Male">Male</SelectItem>
                                    <SelectItem value="Female">Female</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        
                    </div>
                    <DialogFooter>
                        <Button type="submit">Add Student</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default StudentModel;
