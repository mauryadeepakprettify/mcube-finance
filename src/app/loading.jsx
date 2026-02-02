
const loading = () => {
    return (
        <div className="flex fixed inset-0 justify-center items-center h-screen">
            <span className="animate-spin block rounded-full h-[39px] w-[39px] border-2 border-b-3 border-alpha/50  border-b-primary"></span>
        </div>
    )
}

export default loading