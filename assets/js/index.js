const services = {
    "smallRoaches":
        [
            {
                "price": 599,
                "description": "<strong>Cucarachas (Chicas)</strong><br>$599"
            }
        ],
    "bedBugs":
        [
            {
                "price": 599,
                "description": "<strong>Chinches de cama</strong><br>$599"
            }
        ],

    "bigRoaches":
        [
            {
                "price": 499,
                "description": "<strong>Cucarachas (Grandes)</strong><br>$499"
            }
        ],
    "various":
        [
            {
                "price": 499,
                "description": "<strong>Alacranes/Arañas/Hormigas</strong><br>$499"
            }
        ],
    "flyingBugs":
        [
            {
                "price": 499,
                "description": "<strong>Insectos voladores</strong><br>$499"
            }
        ],
    "none":
        [
            {
                "price": 399,
                "description": "<strong>Ninguno, solo preventivo</strong><br>$399"
            }
        ],
    "smallHouse":
        [
            {
                "price": 0,
                "description": "<strong>Chica</strong><br>1 piso<br>1-2 habitaciones<br>Menos de 60 m<br>$0*"
            }
        ],
    "mediumHouse":
        [
            {
                "price": 100,
                "description": "<strong>Mediana</strong><br>2 pisos<br>2-3 habitaciones<br>Menos de 80 m<br>$100*"
            }
        ],
    "bigHouse":
        [
            {
                "price": 200,
                "description": "<strong>Grande</strong><br>2 pisos<br>3-4 habitaciones<br>Menos de 300 m<br>$200*"
            }
        ],
    "veryBigHouse":
        [
            {
                "price": 300,
                "description": "<strong>/Muy grande<strong><br>2 o más pisos<br>3 o más habitaciones<br>Más de 300 m<br>$300 o más*"
            }
        ],

    "veryClose":
        [
            {
                "price": 0,
                "description": "<strong>Muy cerca</strong><br>Menos de 3 km<br>$0"
            }
        ],
    "close":
        [
            {
                "price": 50,
                "description": "<strong>Cerca</strong><br>Menos de 7 km<br>$50"
            }
        ],
    "far":
        [
            {
                "price": 100,
                "description": "<strong>Lejos</strong><br>Menos de 15 km<br>$100"
            }
        ],
    "veryFar":
        [
            {
                "price": 150,
                "description": "<strong>Muy lejos</strong><br>En las afueras o en otra ciudad<br>$150 o más**"
            }
        ]
};
let service = {};
const plague = document.querySelector('#plague');
const houseSize = document.querySelector('#houseSize');
const distance = document.querySelector('#distance');
const total = document.querySelector('#total');

document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', e => {
        delete service[e.target.name];
        service[e.target.name] = services[e.target.id];
        try {
            service["plague[]"][0].description !== undefined;
            plague.innerHTML = `- ${service["plague[]"][0].description}`;
        } catch (e) {
        }
        try {
            service["houseSize[]"][0].description !== undefined;
            houseSize.innerHTML = `- ${service["houseSize[]"][0].description}`;
        } catch (e) {
        }
        try {
            service["distance[]"][0].description !== undefined;
            distance.innerHTML = `- ${service["distance[]"][0].description}`;
        } catch (e) {
        }
        try {
            total.innerHTML = service["plague[]"][0].price + service["houseSize[]"][0].price + service["distance[]"][0].price;
        } catch (e) {
        }
    });
});