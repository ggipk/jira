import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DottedSeparator } from "@/components/dotted-separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { loginSchema } from "@/features/auth/schemas";
// import { useLogin } from "@/features/auth/api/use-login";
import { noAuthClient } from "@/api/client";
import { setUser } from "@/store/userSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export const SignInCard = () => {
  // const { mutate } = useLogin();
  const router = useRouter();
  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    console.log(values);
    const loginInfo = await noAuthClient.post("/user/login", {
      email: values.email,
      password: values.password,
    });
    console.log(loginInfo.data);
    sessionStorage.setItem("access_token", loginInfo.data.access_token);
    sessionStorage.setItem("refresh_token", loginInfo.data.refresh_token);
    dispatch(setUser(loginInfo.data));
    await router.push("/");
  };
  return (
    <Card className="w-full h-full md:w-[478px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Login</CardTitle>
      </CardHeader>
      <div className="px-7 mb-2">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter email address"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={false} size="lg" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          disabled={false}
          variant="secondary"
          size="lg"
          className="w-full"
        >
          <FcGoogle className="mr-2 size-5" />
          Login Google
        </Button>
        <Button
          disabled={false}
          variant="secondary"
          size="lg"
          className="w-full"
        >
          <FaGithub className="mr-2 size-5" />
          Login GitHub
        </Button>
      </CardContent>
      <div className="px-7 ">
        <DottedSeparator />
        <CardContent className="p-7 flex justify-center items-center">
          <p>
            Don&apos;t have an account?
            <Link href="/sign-up">
              <span className="text-blue-700">&nbsp;Sing up</span>
            </Link>
          </p>
        </CardContent>
      </div>
    </Card>
  );
};
