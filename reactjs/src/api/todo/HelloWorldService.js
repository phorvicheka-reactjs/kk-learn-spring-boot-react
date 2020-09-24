import axios from 'axios';

class HelloWorldService {
    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldBeanService() {
        return axios.get('http://localhost:8080/hello-world-bean');
    }

    executeHelloWorldPathVariableService(username) {
        return axios.get(
            `http://localhost:8080/hello-world/path-variable/${username}`
        );
    }
}

export default new HelloWorldService();
