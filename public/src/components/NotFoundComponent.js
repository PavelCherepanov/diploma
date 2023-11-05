import React from 'react';

const NotFoundComponent = () => {
    return (
        <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3">Страница не найдена</p>    
                <a href="/" class="btn btn-primary">Вернуться на главную</a>
            </div>
        </div>
    );
}

export default NotFoundComponent;