import { StudentTable } from "@/components/ui/studentsTable"
import StudentModel from "@/components/modals/studentModal"

export default function Students() {
    return (

        <div>
            <div className="flex justify-evenly">
                <div>
                    <h1 className="text-center font-bold text-3xl" >Students</h1>
                </div>
                <div>
                    {/* Ye Student Add karne ka modal han */}
                    <StudentModel />
                </div>
            </div>
            {/*Ye Student ka table han */}
            <StudentTable />
        </div>

    )
}