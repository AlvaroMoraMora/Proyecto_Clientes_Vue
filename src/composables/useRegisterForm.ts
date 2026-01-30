import { useForm, useField } from 'vee-validate';
import { useI18n } from 'vue-i18n';

export function useRegisterForm() {
    const { t } = useI18n();
    const { handleSubmit } = useForm();

    const validarNombre = (value: string) => {
        if (!value) return t('registro.errores.nombre.obligatorio');
        if (value.length < 4) return t('registro.errores.nombre.minimo');
        if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/.test(value)) return t('registro.errores.nombre.formato');
        return true;
    };

    const validarApellido = (value: string) => {
        if (!value) return t('registro.errores.apellido.obligatorio');
        if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/.test(value)) return t('registro.errores.apellido.formato');
        return true;
    };

    const validarEmail = (value: string) => {
        if (!value) return t('registro.errores.email.obligatorio');
        if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(value)) return t('registro.errores.email.invalido');
        return true;
    };

    const validarUsuario = (value: string) => {
        if (!value) return t('registro.errores.usuario.obligatorio');
        if (value.length < 4) return t('registro.errores.usuario.minimo');
        if (!/^[a-zA-Z0-9_-]+$/.test(value)) return t('registro.errores.usuario.formato');
        return true;
    };

    const validarContrasena = (value: string) => {
        if (!value) return t('registro.errores.contrasena.obligatorio');
        if (value.length < 8) return t('registro.errores.contrasena.minimo');
        if (!/(?=.*[a-z])/.test(value)) return t('registro.errores.contrasena.minuscula');
        if (!/(?=.*[A-Z])/.test(value)) return t('registro.errores.contrasena.mayuscula');
        if (!/(?=.*[\W])/.test(value)) return t('registro.errores.contrasena.especial');
        return true;
    };

    const { value: nombre, errorMessage: errorNombre } = useField<string>('nombre', validarNombre);
    const { value: apellido, errorMessage: errorApellido } = useField<string>('apellido', validarApellido);
    const { value: email, errorMessage: errorEmail } = useField<string>('email', validarEmail);
    const { value: usuario, errorMessage: errorUsuario } = useField<string>('usuario', validarUsuario);
    const { value: contrasena, errorMessage: errorContrasena } = useField<string>('contrasena', validarContrasena);
    
    const validarConfirmacion = (value: string) => {
        if (!value) return t('registro.errores.contrasena.confirmar_obligatorio');
        if (value !== contrasena.value) return t('registro.errores.contrasena.no_coinciden');
        return true;
    };
    const { value: confirmarContrasena, errorMessage: errorConfirmar } = useField<string>('confirmarContrasena', validarConfirmacion);

    const validarTerminos = (value: boolean) => {
        if (!value) return t('registro.errores.terminos');
        return true;
    };
    const { value: aceptarTerminos, errorMessage: errorTerminos } = useField<boolean>('aceptarTerminos', validarTerminos);
    
    const { value: recibirNovedades } = useField<boolean>('recibirNovedades');

    const registrarUsuario = handleSubmit(values => {
        console.log('Registro válido:', values);
        alert('Cuenta creada correctamente (validación exitosa con vee-validate)');
    });

    return {
        nombre, errorNombre,
        apellido, errorApellido,
        email, errorEmail,
        usuario, errorUsuario,
        contrasena, errorContrasena,
        confirmarContrasena, errorConfirmar,
        aceptarTerminos, errorTerminos,
        recibirNovedades,
        registrarUsuario
    };
}
