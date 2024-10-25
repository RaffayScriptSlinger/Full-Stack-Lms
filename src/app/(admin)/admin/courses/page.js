import { CourseTable } from "@/components/ui/courseTable"
import CourseModal from "@/components/modals/courseModal"


export default function Courses() {
    return (
        <div>
            <div className="flex justify-evenly flex-wrap">
                <div>
                    <h1 className="text-center font-bold text-3xl" >Courses</h1>
                </div>
                <div >
                    <CourseModal />
                </div>
            </div>
            <CourseTable />



        </div>

    )
}