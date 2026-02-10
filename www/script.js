document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        let output = "<h3>Ваша заявка:</h3>";

        for (const [name, value] of formData.entries()) {
            output += `<p><b>${getFieldLabel(name)}</b>: ${value}</p>`;
        }

        if (!formData.has("certificate")) {
            output += `<p><b>${getFieldLabel("certificate")}</b>: не нужен</p>`;
        }
        else {
            output += `<p><b>${getFieldLabel("certificate")}</b>: нужен</p>`;
        }

        document.getElementById("result").innerHTML = output;
    });

    function getFieldLabel(fieldName) {
        const labels = {
            "name": "Имя",
            "age": "Возраст",
            "start_date": "Дата начала",
            "course": "Курс",
            "certificate": "Сертификат",
            "payment": "Форма оплаты"
        };
        return labels[fieldName] || fieldName;
    }
});