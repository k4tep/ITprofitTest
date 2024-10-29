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
                return result.message;
            }
        } else {
            return result.message;
        }
    } catch (error) {
        console.error('Ошибка при отправке данных:', error);
        alert('Произошла ошибка при отправке данных. Попробуйте позже.');
        return error;
    }
}
