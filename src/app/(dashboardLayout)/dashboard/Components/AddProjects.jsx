import { postProjects } from '@/app/api/projects/route';
import { useRouter } from 'next/navigation';
import React from 'react';
import Swal from 'sweetalert2';

const AddProjects = ({formData}) => {
const router = useRouter();

  // const handleSubmit = async () => {
  //   const data = await postProjects(formData)

  //   if (data.success) {
  //     alert("Project Added Successfully ");
  //     router.push("/dashboard/projects");
  //   } else {
  //     alert("Something went wrong ");
  //   }
  // };

const handleSubmit = async () => {
  try {
    const data = await postProjects(formData);

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Project Added Successfully",
        icon: "success",
        confirmButtonColor: "#ea580c", 
      }).then(() => {
        router.push("/dashboard/projects");
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: data.message || "Something went wrong",
        icon: "error",
        confirmButtonColor: "#ea580c",
      });
    }
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: "Failed to connect to the server",
      icon: "error",
      confirmButtonColor: "#ea580c",
    });
  }
};


    return (
            <button
            onClick={handleSubmit}
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Save Project
        </button>
    );
};

export default AddProjects;