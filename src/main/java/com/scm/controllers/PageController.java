package com.scm.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;







@Controller
public class PageController {

    @RequestMapping("/home")
    public String home(Model model){
        System.out.println("home page randler");
        model.addAttribute("name", "Substring technologies");
        model.addAttribute("message", "Learn spring boot");
        model.addAttribute("githubRepo", "https://github.com/Shripatil200");
        return "home";
    }

    // about rought

    @RequestMapping("/about")
    public String aboutPage(){
        System.out.println("about page controller");
        return "about";
    }

    //services
    @RequestMapping("/services")
    public String servicesPage(){
        System.out.println("services page controller");
        return "services";
    }

    //Contact page
    @RequestMapping("/contact")
    public String contact(){
        System.out.println("services page controller");
        return "contact";
    }
    //Login page
    @RequestMapping("/login")
    public String login(){
        System.out.println("services page controller");
        return "login";
    }

        //register page
    @RequestMapping("/register")
    public String register(){
        System.out.println("services page controller");
        return "register";
    }


}
