import React from 'react';
import Layout from '@/components/QualityAssusrance/Layout';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import utilStyles from '@/components/QualityAssusrance/styles/util.module.css';
import layout from '@/components/QualityAssusrance/styles/layout.module.css';
import Link from 'next/link';

const Register = () => {
    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            password: '',
            rePassword: '',
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required('required'),
            email: Yup.string().email('Invalid email address').required('required'),
            password: Yup.string()
                .max(13, 'Must be 13 characters or less')
                .min(5, 'Must be at least 5 characters')
                .required('required'),
            rePassword: Yup.string().test('passwords-match', 'Passwords do not match', function (value) {
                return this.parent.password === value;
            }),
        }),
        onSubmit: (values) => {
            console.dir(values);
        },
    });

    const errorMessage = (inputField) =>
        formik.errors[inputField] && formik.touched[inputField] ? (
            <div className={`${utilStyles.validationText} text-danger my-2`}>{formik.errors[inputField]}</div>
        ) : null;

    return (
        <Layout>
            <div className="d-flex flex-column align-items-center justify-content-start">
                <h1 className={`${utilStyles.textCaption} text-uppercase my-5 py-4`}>
                    quality assurance and personnel
                </h1>
                <div className="card d-flex flex-column align-items-start justify-content-start">
                    <h3 className={`${utilStyles.textCaption} text-primary text-capitalize`}>register</h3>
                    <p className={`${utilStyles.textLarge} ${utilStyles.textGrey} my-5`}>Fill the information below</p>
                    <Form
                        onSubmit={formik.handleSubmit}
                        className="w-100 d-flex flex-wrap justify-content-between align-items-center"
                    >
                        <Form.Group controlId="fullname" className={`${layout.equalFlexBasis} my-4`}>
                            <Form.Label
                                className={`${utilStyles.textNormal} ${utilStyles.textGrey} text-uppercase mt-4`}
                            >
                                full name
                            </Form.Label>
                            <Form.Control
                                className={
                                    formik.errors.fullname && formik.touched.fullname
                                        ? `${utilStyles.textNormal} ${layout.inputPadding} ${layout.inputError}`
                                        : `${utilStyles.textNormal} ${layout.inputPadding}`
                                }
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                name="fullname"
                                value={formik.values.fullname}
                            />
                            {errorMessage('fullname')}
                        </Form.Group>

                        <Form.Group controlId="email" className={`${layout.equalFlexBasis} my-4`}>
                            <Form.Label
                                className={`${utilStyles.textNormal} ${utilStyles.textGrey} text-uppercase mt-4`}
                            >
                                Email address
                            </Form.Label>
                            <Form.Control
                                className={
                                    formik.errors.email && formik.touched.email
                                        ? `${utilStyles.textNormal} ${layout.inputPadding} ${layout.inputError}`
                                        : `${utilStyles.textNormal} ${layout.inputPadding}`
                                }
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="email"
                                name="email"
                                value={formik.values.email}
                            />
                            {errorMessage('email')}
                        </Form.Group>

                        <Form.Group controlId="password" className={`${layout.equalFlexBasis} my-4`}>
                            <Form.Label
                                className={`${utilStyles.textNormal} ${utilStyles.textGrey} text-uppercase mt-4`}
                            >
                                Password
                            </Form.Label>
                            <Form.Control
                                className={
                                    formik.errors.password && formik.touched.password
                                        ? `${utilStyles.textNormal} ${layout.inputPadding} ${layout.inputError}`
                                        : `${utilStyles.textNormal} ${layout.inputPadding}`
                                }
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="password"
                                name="password"
                                value={formik.values.password}
                            />
                            {errorMessage('password')}
                        </Form.Group>

                        <Form.Group controlId="rePassword" className={`${layout.equalFlexBasis} my-4`}>
                            <Form.Label
                                className={`${utilStyles.textNormal} ${utilStyles.textGrey} text-uppercase mt-4`}
                            >
                                re-enter Password
                            </Form.Label>
                            <Form.Control
                                className={
                                    formik.errors.rePassword && formik.touched.rePassword
                                        ? `${utilStyles.textNormal} ${layout.inputPadding} ${layout.inputError}`
                                        : `${utilStyles.textNormal} ${layout.inputPadding}`
                                }
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="password"
                                name="rePassword"
                                value={formik.values.rePassword}
                            />
                            {errorMessage('rePassword')}
                        </Form.Group>

                        <Form.Group controlId="terms/conditions" className="my-4 w-100">
                            <Form.Check
                                type="checkbox"
                                label="I accept Terms and condition in private policy"
                                required={true}
                                className={`${utilStyles.textNormal}  ${utilStyles.textGrey}`}
                            />
                        </Form.Group>

                        <div className="w-50 mx-auto d-flex flex-column align-items-center justify-content-center">
                            <Button
                                variant="primary"
                                type="submit"
                                className={`${layout.btnStyle} ${utilStyles.textNormal} text-uppercase w-100 mt-5`}
                            >
                                register
                            </Button>
                            <Link href="/qualityassurance/login">
                                <a className={`${utilStyles.textNormal} ${utilStyles.textPrimaryLighten} mt-4`}>
                                    Already have an account? Log in
                                </a>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>

            <style jsx>
                {`
                    .card {
                        padding: 6rem;
                        min-width: 400px;
                        width: 60%;
                        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
                    }
                `}
            </style>
        </Layout>
    );
};

export default Register;
