
function todo(montCredit, tasInteres, pagMensual) {
    function agregarPrestamo() {
        mostrarPrestamo()
        calcularPrestamo()
        let montCredit = document.getElementById('montoCredito');
        let tasInteres = document.getElementById('tasaIntereses');
        let pagMensual = document.getElementById('pagoMensual');
        return agregarPrestamo

        }

        function calcularPrestamo(montCredit, tasInteres, pagMensual) {
            let valTotal = (montCredit * tasInteres) + montCredit
            let valMensual = valTotal / pagMensual
            agregarPrestamo()
            mostrarPrestamo()
        return calcularPrestamo

        
            }
    
        function mostrarPrestamo() {
        agregarPrestamo()
    
        document.getElementById('monto').innerHTML = montCredit;
        document.getElementById('tasaInt').innerText = tasInteres;
        document.getElementById('numMensual').innerText = pagMensual;
        document.getElementById('valTotal').innerText = valTotal;
        document.getElementById('valMensual').innerText = valMensual;
        calcularPrestamo()
        return mostrarPrestamo
    
        }
    
        
}
        
    