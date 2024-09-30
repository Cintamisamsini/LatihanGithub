const biodata = () => {
    const head = "PERSONAL INFORMATION";
    const detail_info = `<b>Name:</b> Aiko Hanako Lasut  <br>
    <b>Age:</b> 19 years old <br>
    <b>status:</b> active student <br>
    <b>major:</b> information systems <br>
    <b>faculty:</b> computer science <br>
    <b>address:</b> edelweiss dormnitory<br>
    <b>insterest:</b> Product manager, system analyst, digital marketer.`

    return  `
    <center>
        <table border="3">
            <tr>
                <td><center><h2> ${head} </h2></center></td>
                <hr>
            </tr>
            <tr>
                <td><p> <strong>${detail_info}</strong> </p></td>
            </tr>
        </table>
    </center>
    `;
};

export default biodata;