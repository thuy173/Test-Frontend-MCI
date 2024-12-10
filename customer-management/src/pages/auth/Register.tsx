import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import Logo from "../../assets/react.svg";
import BackgroundImage from "../../assets/bgr-auth.jpg";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { registerUser } from "@/redux/apps/auth/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Tên đăng nhập là bắt buộc"),
    password: Yup.string().required("Mật khẩu là bắt buộc"),
  });

  const handleSubmit = async (values: {
    username: string;
    password: string;
  }) => {
    try {
      const resultAction = await dispatch(registerUser(values));

      if (registerUser.fulfilled.match(resultAction)) {
        navigate("/login");
      } else {
        console.error("Register failed");
      }
    } catch (error) {
      console.error("Register failed", error);
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      />
      <div className="absolute inset-0 bg-black/15 z-10" />

      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="z-20 w-full max-w-md mx-4">
            <Card className="w-full p-6 backdrop-blur-md bg-white/10 border border-white/30 shadow-xl">
              <CardHeader className="items-center space-y-4">
                <div className="bg-white rounded-full p-2">
                  <img
                    src={Logo}
                    alt="V"
                    className="w-14 object-contain cursor-pointer"
                    onClick={handleHome}
                  />
                </div>
                <CardTitle className="text-xl text-white">Đăng kí</CardTitle>
                <CardDescription className="text-white/80">
                  Nhập thông tin đầy đủ để đăng kí.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="username" className="text-white">
                      Tên tài khoản
                    </Label>
                    <Input
                      id="username"
                      type="text"
                      name="username"
                      placeholder="Nhập tên tài khoản"
                      value={values.username}
                      onChange={handleChange}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/80 focus:bg-white/30"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-red-400 text-sm"
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex justify-between">
                      <Label htmlFor="password" className="text-white">
                        Mật khẩu
                      </Label>
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Nhập mật khẩu"
                        value={values.password}
                        onChange={handleChange}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/80 focus:bg-white/30"
                      />
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-400 text-sm"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full font-bold bg-white/20 hover:bg-white/50 text-gray-600 border border-white/30"
                  >
                    Đăng kí
                  </Button>
                  <button
                    type="button"
                    className="text-sm text-white/80 hover:text-white underline"
                    onClick={() => navigate("/login")}
                  >
                    Bạn đã có tài khoản? Đăng nhập ngay nàooo
                  </button>
                </div>
              </CardContent>
            </Card>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Register;
