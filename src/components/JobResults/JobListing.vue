<template>
  <li class="mb-7">
    <router-link
      to="/jobs/results/1"
      class="block mx-auto bg-white border border-solid border-brand-gray-2 rounded hover:shadow-gray"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2">
        <h2 class="mb-2 text-2xl">Développeur backend PHP</h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>BLEBLEH COMPAGNIE</span>
          </div>
          <div>
            <span>Toulouse, France</span>
          </div>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Qualifications :</h3>
          <div>
            <ul class="pl-8 list-disc">
              <li>Bonne connaissance des design patterns liés à la POO</li>
              <li>Maîtrise des outils de supervision et administration unix</li>
              <li>Stack principale : PHP 7/8, Symfony 4/5</li>
              <li>
                Idéalement expérience : Go et/ou NodeJS et/ou Java
                Spring/Quarkus
              </li>
              <li>
                Cloud : AWS, RabbitMQ, AMQP, Docker, Terraform, Ansible - CI/CD
                : Jenkins, Github, RobotFramework
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-2 text-center">
          <router-link to="/jobs/results/1" class="text-brand-blue-1"
            >en voir +</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "JobListing",
};
</script>
