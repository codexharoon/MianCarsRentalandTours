
const tableHead = {
        h1:'Tours Pakages',
        h2:'Per Head ( With Group )',
        h3:'Lump Sum ( Family Trip )',
};


const toursPkgDetails = [
    {
        title:'Naran Kaghan Tours Pakages (For More Details Contact!)',

        r11:'Cost-Effective ( 3 Days )',
        r12:'Rs. 14,000',
        r13:'Rs. 75,000',

        r21:'Naran  & Neelum Combo Plan for Couples (6 - 7 Days)',
        r22:'Rs. 85,000',
        r23:'Rs. 85,000',

    },
    {
        title:'Hunza Valley Tours Pakages (For More Details Contact!)',

        r11:'05 Days Hunza',
        r12:'Rs. 24,500/-',
        r13:'N/A',

        r21:'07 Days Hunza',
        r22:'Rs. 29,500/-',
        r23:'N/A',

    },
    {
        title:'Swat Valley Tours Pakages (For More Details Contact!)',

        r11:'03, Days Swat',
        r12:'Rs. 13,500/-',
        r13:'N/A',

        r21:'N/A',
        r22:'N/A',
        r23:'N/A',

    },
    {
        title:'Murree Tours Pakages (For More Details Contact!)',

        r11:'1,2,3 Days Murree Galyat',
        r12:'Rs. 10,500/-',
        r13:'N/A',

        r21:'N/A',
        r22:'N/A',
        r23:'N/A',

    },
    {
        title:'Chitral Valley Tours Pakages (For More Details Contact!)',

        r11:'05 Days Chitral',
        r12:'Rs. 22,500/-',
        r13:'N/A',

        r21:'N/A',
        r22:'N/A',
        r23:'N/A',

    },
    {
        title:'Skardu Valley Pakages (For More Details Contact!)',

        r11:'08 Days Skardu',
        r12:'Rs. 32,500/-',
        r13:'N/A',

        r21:'10 Days Hunza+Skardu',
        r22:'Rs. 38,500/-',
        r23:'N/A',

    },
    {
        title:'Kashmir Tours Pakages (For More Details Contact!)',

        r11:'03, Days Kashmir',
        r12:'Rs. 14,000/-',
        r13:'N/A',

        r21:'N/A',
        r22:'N/A',
        r23:'N/A',

    },
    {
        title:'Kumrat Tours Pakages (For More Details Contact!)',

        r11:'04, Days Kumrat ',
        r12:'Rs. 17,500/-',
        r13:'N/A',

        r21:'N/A',
        r22:'N/A',
        r23:'N/A',

    },
    {
        title:'Custom Pakistan Tours Pakages (For More Details Contact!)',

        r11:'01 Day Umbrella waterfall+ Khanpur Dam',
        r12:'Rs. 7,000/-',
        r13:'N/A',

        r21:'02 Days Shogran Siri Pay',
        r22:'Rs. 9,000/-',
        r23:'N/A',

    },
];


let toursPkgHTML = '';

toursPkgDetails.forEach((tourPkg)=>{
    toursPkgHTML += `
        <section>

            <h4>${tourPkg.title}</h4>
            
            <table class="tours-pkg-table">
                <thead>
                    <tr>
                        <th>${tableHead.h1}</th>
                        <th>${tableHead.h2}</th>
                        <th>${tableHead.h3}</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>${tourPkg.r11}</td>
                        <td>${tourPkg.r12}</td>
                        <td>${tourPkg.r13}</td>
                    </tr>

                    <tr>
                        <td>${tourPkg.r21}</td>
                        <td>${tourPkg.r22}</td>
                        <td>${tourPkg.r23}</td>
                    </tr>

                </tbody>
            </table>

        </section>
    `;
});


document.querySelector('.tours-pkg-container').innerHTML = toursPkgHTML;