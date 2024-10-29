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

function TeacherModel() {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Teacher</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New Teacher</DialogTitle>
                        <DialogDescription>
                            Enter details to add a new teacher
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
                                placeholder="Enter Teacher's First Name"
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
                                placeholder="Enter Teacher's Last Name"
                                className="col-span-3"
                            />
                        </div>
                        {/* Email */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter Teacher's Email"
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
                                placeholder="Enter CNIC Number"
                                className="col-span-3"
                            />
                        </div>
                        {/* Education */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Education" className="text-right">
                            Education
                            </Label>
                            <Input
                                id="Education"
                                placeholder="Enter Your Education "
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
                        <Button type="submit">Add Teacher</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default TeacherModel;
