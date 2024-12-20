export default function Input({
  formProperties,
  name = "you forgot the name",
  required = false,
  validate = false,
  ...rest
}) {
  const {
    register,
    formState: { errors },
  } = formProperties;

  return (
    <div className="input-data my-2">
      <div className="d-flex align-items-center justify-content-between">
        <label htmlFor="first_name" className="me-2">
          {name}
        </label>
        {errors[name] && (
          <div className="text-danger ms-2">{errors[name].message}</div>
        )}
      </div>
      <input
        type="text"
        className="form-control my-2"
        {...rest}
        {...register(name, {
          required: required && `${name} is required`,
          validate: validate
            ? (value) => {
                if (!value.match(validate?.pattern)) {
                  return validate?.msg ?? true;
                }
                return true;
              }
            : false,
        })}
      />
    </div>
  );
}
