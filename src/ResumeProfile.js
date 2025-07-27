import { useState } from 'react';
import defaultImage from './assets/pink-circle-background-designify.png';

/**
 * ResumeProfile component
 *
 * Displays a digital résumé with a sidebar for uploading a profile image and
 * a main content area for the résumé details.  The layout is responsive
 * thanks to Tailwind CSS utility classes.
 */
export default function ResumeProfile() {
  // Store the current profile image.  The default is the image imported
  // from the assets folder.  When the user selects a new file, the
  // component updates this state with a blob URL created from the file.
  const [profileImage, setProfileImage] = useState(defaultImage);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProfileImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-50 flex flex-col items-center p-6"
      style={{ fontFamily: 'Calibri, Arial, sans-serif' }}
    >
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar with Profile Image Upload */}
        <div className="col-span-1 flex flex-col items-center text-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-pink-300 shadow-lg object-cover"
          />
          <label className="mt-4 px-3 py-2 bg-indigo-500 text-white rounded-xl cursor-pointer hover:bg-indigo-600 transition">
            Upload New Photo
            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          </label>

          <h1 className="text-3xl font-bold text-gray-800 mt-4">D Anil Kumar</h1>
          <p className="text-gray-600">DevOps / Kubernetes / GCP Engineer</p>

          {/* Contact Information neatly placed here */}
          <div className="mt-4 text-gray-700 text-sm">
            <p className="font-medium">📍 Bangalore</p>
            <p className="font-medium">📞 +91-7287843240</p>
          </div>

          {/* Links */}
          <div className="mt-4 space-y-2">
            <a
              href="https://www.linkedin.com/in/d-anil-kumar-7426b227a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              LinkedIn
            </a>
            <br />
            <a
              href="https://github.com/AnilKumard369e/Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 underline"
            >
              GitHub
            </a>
            <br />
            <a href="mailto:d.anilkumard01@gmail.com" className="text-red-500 underline">
              d.anilkumard01@gmail.com
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-3">
          <h2 className="text-2xl font-semibold text-gray-800 mt-2">Summary</h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            6 years of experience as a DevOps and Kubernetes Engineer, specializing in automating deployments,
            managing containerized applications, and delivering cloud-native infrastructure across hybrid and GCP
            environments. Proven record of owning CI/CD, scaling Kubernetes clusters, resolving critical production
            issues, and collaborating across agile teams. Strong hands-on expertise with Jenkins, Podman, Terraform,
            and GKE.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">WORK EXPERIENCE</h2>
          <h3 className="font-bold text-gray-800">Tata Consultancy Services (TCS)</h3>
          <p className="italic text-gray-600">
            Project: Starbucks – Kubernetes Platform Engineering (04/2023 - Present)
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
            <li>
              Deployed and managed Kubernetes clusters in hybrid/on-prem environments for global Starbucks retail
              infrastructure.
            </li>
            <li>Implemented GitHub + Jenkins pipelines for containerized microservices.</li>
            <li>Defined and managed Kubernetes objects: Deployments, HPAs, CronJobs, ConfigMaps, Services, Secrets.</li>
            <li>Automated infrastructure with Terraform and managed Helm chart versioning for reproducibility.</li>
            <li>Troubleshot cluster issues like resource exhaustion, node taints, and customer rollout failures.</li>
          </ul>

          <p className="italic text-gray-600 mt-4">Project: TCS BaNCS – Pre-Sales GCP Onboarding</p>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
            <li>Provisioned GCP infra (GKE, Compute Engine, Cloud SQL, IAM) using Terraform for staging/demo setups.</li>
            <li>Built secure CI/CD pipelines in Jenkins integrated with SonarQube and Nexus.</li>
            <li>Used Podman as a Docker-alternative to build container images in air-gapped environments.</li>
            <li>Orchestrated workloads using Kubernetes (GKE) with custom ingress and role bindings.</li>
            <li>Delivered monitoring dashboards with Prometheus and Grafana for application and cluster-level health.</li>
          </ul>

          <h3 className="font-bold text-gray-800 mt-6">AVEIT Solutions Pvt Ltd</h3>
          <p className="italic text-gray-600">
            Project: GCP DevOps Platform for Internal Product Teams (07/2019 - 03/2023)
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
            <li>Built GCP-native CI/CD using Cloud Build, GitHub, and Artifact Registry.</li>
            <li>Managed GKE provisioning via Terraform modules (VPC, IAM, autoscaling node pools).</li>
            <li>Set up GitHub Actions to trigger builds, security scans (Trivy), and automated deployments.</li>
            <li>Used Workload Identity Federation to connect CI pipelines securely to GCP APIs.</li>
            <li>Enabled logging and monitoring using Cloud Monitoring (Stackdriver) and alert policies.</li>
          </ul>

          <p className="italic text-gray-600 mt-4">Project: Enterprise DevOps Automation &amp; Orchestration</p>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
            <li>Designed Jenkins/GitHub pipelines supporting multiple application types (Java, Node.js).</li>
            <li>Managed Kubernetes deployments with Podman containers, RBAC, and Ingress Controllers.</li>
            <li>Automated environment provisioning with Terraform and Ansible.</li>
            <li>Integrated SonarQube + Nexus with pipelines for compliance, versioning, and artifact control.</li>
            <li>Configured Prometheus-Grafana dashboards for node, pod, and application visibility.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">EDUCATION</h2>
          <p className="text-gray-700">
            Bachelor of Science in Mathematics, Statistics &amp; Computer Science – Dravidian University, Kuppam,
            Andhra Pradesh (01/2018)
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">CERTIFICATIONS</h2>
          <p className="text-gray-700">KodeKloud-GCP-DevOps-project</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">AWARDS &amp; SCHOLARSHIPS</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Bronze Award (Q2 2021)</li>
            <li>On-the-Spot Award</li>
            <li>Learning Practitioner Badge</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">SKILLS</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Containerization: Docker (basic), Helm, Podman</li>
            <li>Orchestration: CronJobs, HPA, Ingress, Kubernetes (GKE, on-prem), RBAC</li>
            <li>CI/CD &amp; Automation: Artifact Registry, Cloud Build, GitHub CI/CD, Jenkins, Nexus, SonarQube</li>
            <li>Infrastructure as Code: Ansible, Terraform, Workload Identity Federation</li>
            <li>Monitoring &amp; Logging: cAdvisor, Grafana, Node Exporter, Prometheus, Stackdriver</li>
            <li>Cloud Platforms: Cloud SQL, Compute Engine, Google Cloud Platform (GCP): GKE, IAM, VPC</li>
            <li>Languages &amp; Scripting: Bash, HCL, YAML</li>
            <li>DevOps Practices: GitOps, Infrastructure Provisioning, Shift-Left Security, SRE collaboration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}