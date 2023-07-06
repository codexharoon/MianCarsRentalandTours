
const tableHead = {
        h1:'Tours Pakages',
        h2:'No. of Days / Nights',
        h3:'Price',
};


const toursPkgDetails = [
    {
        title:'Naran Kaghan Tours Pakages',

        r11:'Cost-Effective Naran Kaghan Tour Package',
        r12:'4 Days Tour',
        r13:'Rs. 75,000',

        r21:'Naran  & Neelum Combo Plan for Couples',
        r22:'6 – 7 Days',
        r23:'Rs. 150,000',

        r31:'N/A',
        r32:'N/A',
        r33:'N/A',

    },
    {
        title:'Hunza Valley Tours Pakages',

        r11:'Hunza Valley Deluxe Tour',
        r12:'7 Days / 6 Nights',
        r13:'Starting From 175,000 PKR',

        r21:'Hunza Valley Standard Tour',
        r22:'7 Days / 6 Nights',
        r23:'Starting From 140,000 PKR',

        r31:'Hunza Naran 10 Days Tour',
        r32:'10 Days / 9 Nights',
        r33:'Starting From 230,000 PKR',

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

                    <tr>
                        <td>${tourPkg.r31}</td>
                        <td>${tourPkg.r32}</td>
                        <td>${tourPkg.r33}</td>
                    </tr>
                </tbody>
            </table>

        </section>
    `;
});


document.querySelector('.tours-pkg-container').innerHTML = toursPkgHTML;