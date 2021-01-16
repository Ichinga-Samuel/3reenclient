import React from 'react';
import Layout from '@/components/QualityAssusrance/layout/Layout';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import utilStyles from '@/components/QualityAssusrance/styles/util.module.css';
import layout from '@/components/QualityAssusrance/styles/layout.module.css';

const Login = () => {
    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('required'),
            password: Yup.string()
                .max(13, 'Must be 13 characters or less')
                .min(5, 'Must be at least 5 characters')
                .required('required'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Layout>
            <div className="d-flex flex-column align-items-center justify-content-start">
                <h1 className={`${utilStyles.textCaption} text-uppercase my-5 py-4`}>
                    quality assurance and personnel
                </h1>
                <div className="card d-flex flex-column align-items-start justify-content-start">
                    <h3 className={`${utilStyles.textCaption} text-primary text-capitalize`}>log in</h3>
                    <p className={`${utilStyles.textLarge} ${utilStyles.textGrey} my-5`}>log in to your account</p>
                    <Form onSubmit={formik.handleSubmit} className="w-100">
                        <Form.Group controlId="formBasicEmail">
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
                        </Form.Group>
                        {formik.errors.email && formik.touched.email ? (
                            <div className={`${utilStyles.validationText} text-danger mb-2`}>{formik.errors.email}</div>
                        ) : null}

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label
                                className={`${utilStyles.textNormal} ${utilStyles.textGrey} text-uppercase mt-4`}
                            >
                                Password
                            </Form.Label>
                            <Form.Control
                                className={
                                    formik.errors.email && formik.touched.email
                                        ? `${utilStyles.textNormal} ${layout.inputPadding} ${layout.inputError}`
                                        : `${utilStyles.textNormal} ${layout.inputPadding}`
                                }
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="password"
                                name="password"
                                value={formik.values.password}
                            />
                        </Form.Group>
                        {formik.errors.password && formik.touched.password ? (
                            <div className={`${utilStyles.validationText} text-danger mb-2`}>
                                {formik.errors.password}
                            </div>
                        ) : null}

                        <Button
                            variant="primary"
                            type="submit"
                            className={`${layout.btnStyle} ${utilStyles.textNormal} text-uppercase w-100 mt-5`}
                        >
                            Log in
                        </Button>
                    </Form>
                </div>
            </div>

            <style jsx>
                {`
                    .card {
                        padding: 6rem;
                        max-width: 500px;
                        width: 80%;
                        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
                    }
                `}
            </style>
        </Layout>
    );
};

export default Login;
