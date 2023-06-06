"use client";
import "bootstrap/dist/css/bootstrap.css";
import {
  Spinner,
  ClientInfo,
  EditProjectForm,
  DeleteProjectButton,
} from "../../components";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../../queries/projectQueries";
import Link from "next/link";
import { useParams } from "next/navigation";

const ProjectPage = () => {
  const { slug } = useParams();

  // console.log(useParams());

  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id: slug },
  });

  // console.log(slug);

  // console.log(data);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link href="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>

          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>

          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{data.project.status}</p>

          <ClientInfo client={data.project.client} />

          <EditProjectForm project={data.project} />

          <DeleteProjectButton projectId={data.project.id} />
        </div>
      )}
    </>
  );
};
export default ProjectPage;
