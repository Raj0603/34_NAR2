import Resumetemp2 from "../Resume/Resume temp 2/Resumetemp2";

function template() {
    return (
        <>
            <Resumetemp2
                ref={resumeRef}
                sections={sections}
                information={resumeInformation}
            />
        </>
    )
}
export default template