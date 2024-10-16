
import images from "../images/bannerInput.png"
import ShoppingDrawer from "./ShoppingDrawer";
function Banner() {
    const onClose = () => {
        setOpen(false);
    };
    return (


        <div
            className="w-full h-screen bg-no-repeat bg-cover"
            style={{
                top: "95.7px",
                width: "100%",
                height: "600px",
                backgroundSize: "cover",
                backgroundPosition: "center",

                backgroundRepeat: "no-repeat",
                backgroundImage: `url(https://s3-alpha-sig.figma.com/img/98fb/219f/a11f805aade2224f1d6658764a2395df?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8SBzd6u2RRJF7HHbCE2yVAQsNiYEpqLlyn6a4lKrjydBdUe8oPNwdnnBGWsdl~TesS12RhESv23mFB00ic6R7Hfxgr7weZEIPMho8e7PtcmBUCSV11BizLPM0B-sMQUQGpDICE5r1XpZzM6N85acUJxJCHkuxgqkYxzKCHctD5IVAmb7NxA6D7dmxOLoq4RHWqnINY8dguK3AZ0j0GL0aY35GCqA1DL2sllHkfKtg-y~at2j75lyJml41GxOviO7y~wDsb9vEIiaHDK~crSVlxVZUQvw0kRVy5kMKyPJX5qv4s0QJ8MQcSmcTF3-l219LhuQmH3Kn87u7VYEuKmTg__)`
            }}>
            {/* banner ka ander wali image */}
            <div className="w-[573px] h-[380px]"
                style={{
                    zIndex: "auto",
                    position: "fixed",
                    top: "253px",
                    left: "739px",
                }}
            >
                {/* <img src={`${images}`} /> */}
            </div>

        </div >


    )
}

export default Banner;