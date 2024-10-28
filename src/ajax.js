export async function ajaxFormSubmit(data) {
    try {
        const response = await fetch('http://localhost:9090/api/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            if (result.status === 'success') {
                alert(result.msg);
                return null;
            } else if (result.status === 'error' && result.fields) {
                return result.fields;
            } else {
                alert('Произошла неизвестная ошибка. Попробуйте позже.');
                return null;
            }
        } else {
            console.error('Ошибка сети:', response.status);
            alert('Ошибка сети. Попробуйте позже.');
            return null;
        }
    } catch (error) {
        console.error('Ошибка при отправке данных:', error);
        alert('Произошла ошибка при отправке данных. Попробуйте позже.');
        return null;
    }
}
