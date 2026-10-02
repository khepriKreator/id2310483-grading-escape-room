import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../shared/api/store/hooks';
import { getAuthStatus } from '../../shared/api/store/slices/user-slice/selectors';
import { AuthStatus, Paths } from '../../shared/api/const';
import { useForm } from 'react-hook-form';
import styles from './styles.module.css';
import { login } from '../../shared/api/store/api-actions';

type FormData = {
  email: string;
  password: string;
};

const passwordValidation = {
  pattern: /^(?=.*[A-Za-z])(?=.*\d).+$/,
  minMaxLength: [3, 15]
};

const emailValidation = {
  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
};

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);
  const navigate = useNavigate();
  const {
    formState: {
      errors,
      isValid,
      isSubmitting
    },
    register,
    handleSubmit,
    reset
  } = useForm<FormData>({
    mode: 'onBlur',
  });

  if (authStatus === AuthStatus.Auth) {
    navigate(Paths.MAIN);
  }

  const onSubmit = handleSubmit((data) => {
    dispatch(login(data));
    reset();
  });

  return (
    <main className="decorated-page login">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
          />
          <img
            src="img/content/maniac/maniac-size-m.jpg"
            srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
            width="1366"
            height="768"
            alt=""
          />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="login__form">
          <form
            className="login-form"
            onSubmit={(evt) => {
              evt.preventDefault();
              void onSubmit();
            }}
          >
            <div className="login-form__inner-wrapper">
              <h1 className="title title--size-s login-form__title">Вход</h1>
              <div className="login-form__inputs">
                <div className="custom-input login-form__input">
                  <label className="custom-input__label" htmlFor="email">
                    E&nbsp;&ndash;&nbsp;mail
                  </label>
                  <input
                    id="email"
                    {...register(
                      'email',
                      {
                        required: 'Поле обязательно для заполнения',
                        pattern: {
                          value: emailValidation.pattern,
                          message: 'Неверная почта',
                        },
                      }
                    )}
                    placeholder="Адрес электронной почты"
                  />
                  <div className={styles.errorContainer}>
                    {errors?.email && <p className={styles.errorText}>{errors?.email?.message || 'Ошибка!'}</p>}
                  </div>
                </div>
                <div className="custom-input login-form__input">
                  <label className="custom-input__label" htmlFor="password">
                    Пароль
                  </label>
                  <input
                    type="password"
                    id="password"
                    {
                      ...register(
                        'password',
                        {
                          required: 'Поле обязательно для заполнения',
                          minLength: {
                            value: passwordValidation.minMaxLength[0],
                            message: `Пароль должен содержать не менее ${passwordValidation.minMaxLength[0]} символов`
                          },
                          maxLength: {
                            value: passwordValidation.minMaxLength[1],
                            message: `Пароль должен содержать не более ${passwordValidation.minMaxLength[1]} символов`
                          },
                          pattern: {
                            value: passwordValidation.pattern,
                            message: 'Пароль должен содержать хотя бы одну букву и одну цифру'
                          }
                        }
                      )
                    }
                    placeholder="Пароль"
                  />
                  <div className={styles.errorContainer}>
                    {errors?.password && <p className={styles.errorText}>{errors?.password?.message || 'Ошибка!'}</p>}
                  </div>
                </div>
              </div>
              <button
                className="btn btn--accent btn--general login-form__submit"
                type="submit"
                disabled={!isValid || isSubmitting}
              >
                Войти
              </button>
            </div>
            <label className="custom-checkbox login-form__checkbox">
              <input
                type="checkbox"
                id="id-order-agreement"
                name='user-agreement'
                required
              />
              <span className="custom-checkbox__icon">
                <svg width="20" height="17" aria-hidden="true">
                  <use xlinkHref="#icon-tick"></use>
                </svg>
              </span>
              <span className="custom-checkbox__label">
                Я&nbsp;согласен с
                <a
                  className="link link--active-silver link--underlined"
                  href="#"
                >
                  правилами обработки персональных данных
                </a>
                &nbsp;и пользовательским соглашением
              </span>
            </label>
          </form>
        </div>
      </div>
    </main>
  );
};
