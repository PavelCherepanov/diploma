import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const errorNoMetamaskNotify = () => {
    toast.warning("MetaMask не установлен!")
};

export const errorNoFileNotify = () => {
    toast.error("Ошибка! Файл не выбран!")
};

export const errorNotVerifyNotify = () => {
    toast.error("Ошибка! Файл подделан!")
};

export const errorFileAlreadyExistsNotify = () => {
    toast.error("Ошибка! Такой файл уже есть!")
};

export const successUploadFileNotify = () => {
    toast.success("Файл загружен!")
};

export const successVerifyFileNotify = () => {
    toast.success("Файл верифицирован!")
};