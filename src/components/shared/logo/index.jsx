const Logo = ({tagline=false})=>{
    return(
        <>
            <img src="/images/logo.svg" className="w-[150px]" alt="images"/>
            {
                tagline &&
                <p>
                    Eduport education theme, built specifically for the education centers which is dedicated to teaching and involve learners.
                </p>
            }
        </>
    )
}
export default Logo;