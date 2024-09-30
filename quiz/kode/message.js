const message = {} => {
    const header = "<div style = 'text-align: center;'> <h1> Personal information</h1></div>";
    const name = "semmy wellem taju";
    const age = "33";
    const status ="single";
    return header + ' <hr> <strong> name : </strong>' + name
                  + ' <br> <strong> age : </strong>' + age
                  + ' <br> <strong> status : </strong>' + status;
};

export default message;