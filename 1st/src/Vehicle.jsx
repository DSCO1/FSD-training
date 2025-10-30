function Car1(){
    const mystyle={
        width: "500px",
        height: "300px"
    }
    return(
       <>
        <h1>Car 1 </h1>
        <p> Car model 1 </p>
        <img style={mystyle} src="https://eu-images.contentstack.com/v3/assets/blt0bbd1b20253587c0/blt4bf1a4090380d5b0/651579e1a95ca40cf4969a68/00-Divo_BUGATTI.jpg?width=1280&auto=webp&quality=80&format=jpg&disable=upscale" alt="car1"/>
       </>
    )
}
export default Car1;