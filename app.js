const ssearch = () => {
    const searchbox = document.getElementById('search').value.toUpperCase();
    const items = document.getElementById("product-list");
    const product = document.querySelectorAll('.product');
    const pname = items.getElementsByTagName('h3');

    console.log(pname.length);

    for (let i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h3')[0];

        if (match) {
            let textval = match.textContent || match.innerHTML;

            if (textval.toUpperCase().indexOf(searchbox) != -1) {
                product[i].style.display = "";
            } else product[i].style.display = "none";
        }
    }
};
