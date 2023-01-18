const notificationsCounter = document.querySelector(".notifications-counter");
const markAllButton = document.querySelector(".mark-all-button");
const notificationDots = document.querySelectorAll(".notification-dot");
let notifications = document.querySelectorAll("main ul li");

notificationsCounterNumber = 0;

for (let index = 0; index < notifications.length; index++) {
    if (notifications[index].classList == "new-notification") {
        notificationDots[index].style.display = "inline-block";

        notificationsCounterNumber++;
    }
    
    notificationsCounter.innerHTML = notificationsCounterNumber;

    notifications[index].addEventListener("mouseover", 
        () => {
            if (notifications[index].classList == "new-notification") {
                notifications[index].classList.remove("new-notification");

                notificationDots[index].style.display = "none";

                notificationsCounterNumber--;

                notificationsCounter.innerHTML = notificationsCounterNumber;
            }
        }
    )   
}

markAllButton.addEventListener("click",
    () => {
        notificationsCounter.innerHTML = 0;

        for (let index = 0; index < notifications.length; index++) {
            notifications[index].classList.remove("new-notification");
            
            notificationDots[index].style.display = "none";
        }
    }
)