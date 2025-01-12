/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React , {createContext , useState}  from 'react'

import run from '..'

export const dataContext = createContext()

function UserContext({children}) {

    let[speaking, setSpeaking]= useState(false)
    let[recognitionText, setRecognitionText] = useState("listening.....")
    let[response, setResponse] = useState(false)

    function speak(text) {
        let text_speak = new SpeechSynthesisUtterance(text)
        text_speak.volume = 1
        text_speak.rate = 0.8
        // text_speak.pitch = 5
        // text_speak.lang = 'en-US'
        text_speak.pitch = 1.1
        text_speak.lang = 'hi-GB'
        window.speechSynthesis.speak(text_speak);
    }

    async function aiResponse(prompt){

        let text = await run(prompt)
        let newText = text.split("**")&&text.split("*")&&text.replace("gprompt", "Techi")&&text.replace("gprompt", "Techi 2.O")&&text.replace("google" , "Maaanam Sir")&&text.replace("Google" , "Maaanam Sir")&&text.replace("large language model" , "Techie 2.O")&&text.replace("large language model" , "Techie 2.O")&&text.replace("Google" , "manaam sir")
        setRecognitionText(newText)
        speak(newText)
        setResponse(true)
        setTimeout(() => {
            setSpeaking(false)
        }, 8000)
    }

    let speachRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    let recognition = new speachRecognition()
    recognition.onresult= (e) => {
        let currentIndex = e.resultIndex
        let transcript = e.results[currentIndex][0].transcript
        console.log(transcript)
        setRecognitionText(transcript)
        takeCommand(transcript.toLowerCase())
    }

    function takeCommand(command) {
        if (command.includes("who are you") || command.includes("what is your name") || command.includes("what's your name") || command.includes("tell me about yourself") || command.includes("hu r u")) {
            let message = "I am Techie 2.O, Your Virtual Assistant. I am here to assist you in your, created by Maaanam Sujra at Tecrix Kotmomin in the supervision of Mr. Hamzaa.";
            speak(message);
            setRecognitionText(message);
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        } else if (command.includes("how are you") || command.includes("how are you doing") || command.includes("how are you feeling") || command.includes("how are you doing today") || command.includes("how are you feeling today") || command.includes("how r u")) {
            let message = "I am fine, Thank you for asking. How can I assist you?";
            speak(message);
            setRecognitionText(message);
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        } else if (command.includes("open") && command.includes("youtube")) {
            let message = "Sure sir, Opening Youtube";
            speak(message);
            setRecognitionText(message);
            window.open("https://www.youtube.com");
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        } else if (command.includes("open") && command.includes("my github account")) {
            let message = "Sure sir, Opening your Github account";
            speak(message);
            setRecognitionText(message);
            window.open("https://github.com/AM-gitco");
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        } else if (command.includes("open") && command.includes("facebook")) {
            let message = "Sure sir, Opening Facebook";
            speak(message);
            setRecognitionText(message);
            openDesktopApp("https://www.facebook.com", "Facebook");
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        } else if (command.includes("open") && command.includes("instagram")) {
            let message = "Sure sir, Opening Instagram";
            speak(message);
            setRecognitionText(message);
            openDesktopApp("https://www.instagram.com", "Instagram");
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        } else if (command.includes("open") && command.includes("tiktok")) {
            let message = "Sure sir, Opening TikTok";
            speak(message);
            setRecognitionText(message);
            openDesktopApp("https://www.tiktok.com", "TikTok");
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        } else if (command.includes("open") && command.includes("google")) {
            let message = "Sure sir, Opening Google";
            speak(message);
            setRecognitionText(message);
            openDesktopApp("https://www.google.com", "Google");
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        } else if (command.includes("open") && command.includes("linkedin")) {
            let message = "Sure sir, Opening LinkedIn";
            speak(message);
            setRecognitionText(message);
            openDesktopApp("https://www.linkedin.com", "LinkedIn");
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        } else if (command.includes("open") && command.includes("calculator")) {
            let message = "Sure sir, Opening Calculator";
            speak(message);
            setRecognitionText(message);
            openDesktopApp("calculator://", "Calculator");
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        } else if (command.includes("open") && command.includes("whatsapp")) {
            let message = "Sure sir, Opening WhatsApp";
            speak(message);
            setRecognitionText(message);
            openDesktopApp("whatsapp://", "WhatsApp");
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        } else if (command.includes("open") && command.includes("beta whatsapp app")) {
            let message = "Sure sir, Opening WhatsApp Beta";
            speak(message);
            setRecognitionText(message);
            openDesktopApp("whatsapp-beta://", "WhatsApp Beta");
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        } else if (command.includes("open") && command.includes("snapchat")) {
            let message = "Sure sir, Opening Snapchat";
            speak(message);
            setRecognitionText(message);
            openDesktopApp("snapchat://", "Snapchat");
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        } else if (command.includes("open") && command.includes("github desktop")) {
            let message = "Sure sir, Opening GitHub Desktop";
            speak(message);
            setRecognitionText(message);
            openDesktopApp("github-desktop://", "GitHub Desktop");
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        } else if (command.includes("open") && command.includes("vs code")) {
            let message = "Sure sir, Opening Visual Studio Code";
            speak(message);
            setRecognitionText(message);
            openDesktopApp("vscode://", "Visual Studio Code");
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        } else if (command.includes("open") && command.includes("random app")) {
            const apps = [
                { url: "whatsapp://", name: "WhatsApp" },
                { url: "snapchat://", name: "Snapchat" },
                { url: "github-desktop://", name: "GitHub Desktop" },
                { url: "vscode://", name: "Visual Studio Code" }
            ];
            const randomApp = apps[Math.floor(Math.random() * apps.length)];
            let message = `Sure sir, Opening ${randomApp.name}`;
            speak(message);
            setRecognitionText(message);
            openDesktopApp(randomApp.url, randomApp.name);
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        }
        else if (command.includes("tecrix")) {
            let message = "Tecrix is a cutting-edge software house specializing in advanced IT courses and digital services. They empower individuals and businesses with expertise in Generative AI, SEO, WordPress development, video editing, and more. At Tecrix, they blend technology with creativity to shape the future, offering innovative solutions and skill-building for tomorrow’s challenges.";
            speak(message);
            setRecognitionText(message);
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        }
        
        else if (command.includes("tell about sir Hamza") || 
                 command.includes("tell about mr. Hamza") || 
                 command.includes("tell about Mr. Hamza Sir") || 
                 command.includes("tell about Mr. Hamzaa Sir Hamzaa")) {
            let message = "Mr. Hamza, the Senior Marketer at TEcrix Academy in Kotmomin, is an expert in digital marketing with a deep understanding of AI technologies. He is known for his innovative teaching approach, emphasizing real-world applications of AI in marketing. His ability to simplify complex concepts and his dedication to mentoring students make him a respected figure at the academy, helping students excel in AI-driven marketing.";
            speak(message);
            setRecognitionText(message);
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        }else if (command.includes("time")) {
            let time = new Date().toLocaleString(undefined, {hour: 'numeric', minute: 'numeric', hour12: true});
            let message = `Now the time is ${time}`;
            speak(message);
            setRecognitionText(message);
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        }
        
        // Date
        else if (command.includes("date")) {
            let date = new Date().toLocaleDateString(undefined, {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'});
            let message = `Today's date is ${date}`;
            speak(message);
            setRecognitionText(message);
            setTimeout(() => {
                setSpeaking(false);
            }, 10000);
        }
        
        // Weather Command (Optional)
        else if (command.includes("tell about weather") || command.includes("weather")) {
            // Extract the location from the message or set a default location
            let location = command.split("weather in")[1]?.trim() || "London";
            
            fetch(`http://api.weatherapi.com/v1/current.json?key=91767e25377a49a8b27191801251001&q=${location}&aqi=no`)
            .then(response => response.json())
            .then(data => {
                let weather = data.current.condition.text;
                let temp = data.current.temp_c;
                let message = `The current weather in ${location} is ${weather} with a temperature of ${temp} °C.`;
                speak(message);
                setRecognitionText(message);
                setTimeout(() => {
                    setSpeaking(false);
                }, 10000);
            })
            .catch(error => {
                let message = "Sorry, I couldn't fetch the weather data.";
                speak(message);
                setRecognitionText(message);
                setTimeout(() => {
                    setSpeaking(false);
                }, 10000);
            });
        }
                
        else{
            aiResponse(command)
        }
    }

    let value = {
        recognition,
        speaking, 
        setSpeaking,
        recognitionText,
        setRecognitionText,
        response,
        setResponse
    }

  return (
    <div>
        <dataContext.Provider value={value}>
            {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext