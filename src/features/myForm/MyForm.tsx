import { useForm } from 'react-hook-form';

type FormData = { name: string; email: string };

const MyForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
    } = useForm<FormData>({ mode: 'onSubmit' });

    const onSubmit = (data: FormData) => console.log(data);

    return (
        <div className="margin-auto max-width-400">
            <div className="text-size-h3 margin-bottom-15">Form Example</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`form-group ${errors.name ? 'has-feedback has-error' : ''}`}>
                    <label className="control-label">Name*</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="John Doe"
                        {...register('name', { required: true })}
                    />
                    {errors.name && (
                        <>
                            <span className="form-control-feedback rioglyph rioglyph-error-sign" />
                            <span className="help-block">
                                <span>Name is required</span>
                            </span>
                        </>
                    )}
                </div>

                <div className={`form-group ${errors.email ? 'has-feedback has-error' : ''}`}>
                    <label className="control-label">E-Mail*</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="john.doe@rio.cloud"
                        {...register('email', {
                            required: true,
                            pattern: /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/i,
                        })}
                    />
                    {errors.email && (
                        <>
                            <span className="form-control-feedback rioglyph rioglyph-error-sign" />
                            <span className="help-block">
                                <span>E-Mail is not valid</span>
                            </span>
                        </>
                    )}
                </div>
                <div className="display-flex justify-content-end margin-top-25">
                    <button type="submit" className="btn btn-primary" disabled={!isDirty}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MyForm;
