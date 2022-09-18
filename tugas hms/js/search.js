const search = () => {
    const searchbox = document.getElementsByClassName("container mt-5").value.toUpperCase();
    const storeitems = document.getElementsByClassName("judul-kategori");
    const product = document.querySelectorAll(".menu-kategori");
    const pname = document.getElementsByTagName("p");

    for(var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('p')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue,toUpperCase().homepageOf(searchbox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";

            }
        }
    }
}