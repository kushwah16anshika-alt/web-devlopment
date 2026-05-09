document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();

    const dob= document.getElementById("DOB").value;
    const curdate= document.getElementById("CurrentDate").value;

    // let curyear=curdate.split("-");
    // console.log(curyear);
    // console.log(curyear[0]);

    
    const Age=Number(curdate.split())


})