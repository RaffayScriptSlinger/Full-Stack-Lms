import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"






function CourseModel() {

    return (
        <div>
          
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Course</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Course</DialogTitle>
                        {/* <DialogDescription></DialogDescription> */}
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right" >

                                 Name 
                            </Label>
                            <Input
                                id="courseName"
                                placeholder="Enter Course Name"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="duration" className="text-right" >

                                 Duration 
                            </Label>
                            <Input
                                id="Duration"
                                placeholder=" Course Duration"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Status
                            </Label>
                        
                            <Select>
                                <SelectTrigger className="w-full col-span-3">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                  
                                    <SelectItem value="Active">Active</SelectItem>
                                    <SelectItem value="Not-Active">Not-Active</SelectItem>
                               
                                </SelectContent>
                            </Select>

                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Discription" className="text-right" >

                            Discription 
                            </Label>
                            <Input
                                id="Discription"
                                placeholder=" Course Discription"
                                className="col-span-3"
                            />
                            
                        </div>
                    

                    </div>
                    <DialogFooter>
                        <Button type="submit">Add Course </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>



        </div>
    )
}
export default CourseModel