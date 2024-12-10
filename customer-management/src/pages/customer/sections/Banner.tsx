import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserCircle } from "lucide-react";

const Banner = () => {
  return (
    <section>
      <div className="mt-20">
        <div className="grid grid-cols-2 justify-between">
          <div className="flex gap-2 items-center">
            <UserCircle className="text-yellow-700" />
            <p className="text-2xl font-semibold">Quản lý khách hàng</p>
          </div>
          <div className="flex gap-5 justify-end">
            <div className="flex flex-col">
              <p className="flex justify-end text-sm font-semibold ">Mrs Conan</p>
              <p className="flex justify-end text-sm font-semibold">Nhân viên kinh doanh</p>
            </div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
