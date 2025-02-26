const departamentoSelect = document.getElementById("departamento");
const ciudadSelect = document.getElementById("ciudad");

fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json')
.then(response => response.json())
.then(data => {
    const departamentosYCiudades = {};

    data.forEach(item => {
        const departamento = item.departamento;
        const ciudad = item.municipio;

        if (!departamentosYCiudades[departamento]) {
            departamentosYCiudades[departamento] = [];
        }

        departamentosYCiudades[departamento].push(ciudad);
    });

    // Populate the departamento select
    for (const departamento in departamentosYCiudades) {
        const option = document.createElement("option");
        option.value = departamento;
        option.text = departamento;
        departamentoSelect.add(option);
    }

    // Handle departamento change
    departamentoSelect.addEventListener("change", (event) => {
        const selectedDepartamento = event.target.value;
        const ciudades = departamentosYCiudades[selectedDepartamento];

        // Clear the ciudad select
        ciudadSelect.innerHTML = '<option value="">Selecciona una ciudad</option>';

        // Populate the ciudad select
        if (ciudades) {
            ciudades.forEach(ciudad => {
                const option = document.createElement("option");
                option.value = ciudad;
                option.text = ciudad;
                ciudadSelect.add(option);
            });
        }
    });
})
.catch(error => console.error('Error fetching data:', error));