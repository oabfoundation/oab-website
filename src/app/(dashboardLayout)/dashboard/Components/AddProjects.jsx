import { postProjects } from '@/app/api/projects/route';
import { useRouter } from 'next/navigation';
import React from 'react';

const AddProjects = ({formData}) => {
const router = useRouter();

    console.log('formdata is', formData)
  const handleSubmit = async () => {
    const data = await postProjects(formData)

    if (data.success) {
      alert("Project Added Successfully ");
      router.push("/dashboard/projects");
    } else {
      alert("Something went wrong ");
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