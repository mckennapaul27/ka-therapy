import depression from '../images/services-depression.jpg'
import anxiety from '../images/services-anxiety.jpg'
import ocd from '../images/services-ocd.jpg'
import trauma from '../images/services-trauma.jpg'
import selfEsteem from '../images/services-self-esteem.jpg'
import selfEsteem2 from '../images/services-self-esteem2.jpg'

import addiction from '../images/services-addiction.jpg'

const services = [
    // { 
    //     title: 'All the Lorem Ipsum generators on the Internet', 
    //     src: 'calming-tree.jpg', 
    //     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' ,
    //     id: 'CBT',
    //     date: 'Feb 15, 2020',
    //     url: '/blog/calming-tree'
    // },
    // { 
    //     title: 'All the Lorem Ipsum generators on the Internet', 
    //     src: 'calming-boat.jpg', 
    //     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' ,
    //     id: 'CBT',
    //     date: 'Feb 15, 2020',
    //     url: '/blog/calming-tree'
    // },
    // { 
    //     title: 'All the Lorem Ipsum generators on the Internet', 
    //     src: 'calming-girl.jpg', 
    //     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' ,
    //     id: 'CBT',
    //     date: 'Feb 15, 2020',
    //     url: '/blog/calming-tree'
    // },
    // { 
    //     title: 'All the Lorem Ipsum generators on the Internet', 
    //     src: 'calming-tree.jpg', 
    //     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' ,
    //     id: 'CBT',
    //     date: 'Feb 15, 2020',
    //     url: '/blog/calming-tree'
    // },
    // { 
    //     title: 'All the Lorem Ipsum generators on the Internet', 
    //     src: 'calming-boat.jpg', 
    //     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' ,
    //     id: 'CBT',
    //     date: 'Feb 15, 2020',
    //     url: '/blog/calming-tree'
    // },
    // { 
    //     title: 'All the Lorem Ipsum generators on the Internet', 
    //     src: 'calming-girl.jpg', 
    //     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' ,
    //     id: 'CBT',
    //     date: 'Feb 15, 2020',
    //     url: '/blog/calming-tree'
    // }       
]

const treatments = [
    {
        title: 'Depression & Low Mood',
        img: depression,
        desc: 'Depression often decreases the quality of life you live. The common symptoms of depression are; sadness, anxiety, panicky, more tired than usual or unable to sleep, angry or frustrated, not getting enjoyment out of life, feeling hopeless or worthless, guilt, not being able to concentrate on everyday things, having suicidal thoughts or thoughts about harming yourself. You may experience some or all of these symptoms. Depression is a common mental health problem which we can all experience at some point throughout our lives. Working with your therapist will allow you to improve your motivation and gain a better quality of life.'
    },
    {
        title: 'Anxiety Disorder',
        img: anxiety,
        desc: 'Anxiety can be experienced in many different ways. The common symptoms of anxiety disorders are; uncontrollable racing thoughts, uncontrollable worries, extreme fear triggered by social situations, fear triggered by specific objects, dizziness, sweating, shaking, nausea, palpitations and panic attacks. Anxiety commonly occurs alongside other mental health problems but also by itself. CBT looks at the negative cycles of thoughts and behaviours you may be stuck in which often keeps the anxiety going. You and your therapist will break down your problems allowing an improvement in your anxiety symptoms.'
    },
    {
        title: 'Obsessive Compulsive Disorder (OCD)',
        img: ocd,
        desc: 'OCD is a common mental health condition The common symptoms are; obsessive thoughts, compulsive behaviours and unwanted intrusions. Unwanted intrusions can appear as a thought or image which causes distress further leading to the unwanted obsessive thoughts, further leading to the neutralising behaviour to reduce the distress attached to the intrusion. OCD can affect men, women and children, symptoms often start around puberty or early adulthood but not always. CBT will allow you to understand your intrusions and the distress attached. You and your therapist will look at your obsessive compulsive thoughts and behaviours and find alternative evidence allowing for an improvement of your OCD.'
    },
    {
        title: 'Trauma & Post-Traumatic Stress Disorder (PTSD)',
        img: trauma,
        desc: 'Any situation which a person finds traumatic can cause PTSD, a few examples are; road accidents, an assault, marriage breakdown, illness/injury or childbirth. The traumatic event causes a psychological or emotional response to the situation. The common symptoms are; reliving the trauma, feeling like the incident is a current threat, experiencing nightmares or flashbacks, difficulty sleeping, fear, isolation, anger and frustration. CBT is recommended by NICE Guidance for the treatment of trauma and PTSD. You and your therapist will explore the traumatic memories allowing for them to be processed, reducing distress and further allowing an improvement of your quality of life.'
    },
    // {
    //     title: 'Low-Self Esteem',
    //     img: selfEsteem2,
    //     desc: 'Low self-esteem is a recurrent thought of oneself as unlovable or inadequate.  This leads to reduced confidence and if it continues over a long period of time it can be detrimental impact on our mental health and day-to-day function.  Low self-esteem often begins in childhood.  Our friends, siblings, parents, teachers and social media send us both positive and negative messages about ourselves. CBT helps us to challenge these unhelpful thinking patterns using cognitive restructuring, activating self-care strategies  and self-compassion.  CBT also encourages us to challenge unhelpful coping strategies and self-critical thinking.'
    // },
    // {
    //     title: 'Addiction',
    //     img: addiction,
    //     desc: 'Addiction effects 1 in 3 people, it can be explained as not having control over doing something or taking something to the point that it could be harmful to your health.  Addictions can start by a substance or activity giving heightened feelings both physically and mentally which leaves the individual having powerful urges to do the activity again or take the substance again.  Addiction  means that by not having, or not engaging with the activity can cause withdrawal symptoms.  Because this can be unpleasant and often painful it becomes easier to carry on having or doing what you crave, and so the cycle is maintained. CBT aims to address the underlying beliefs and negative thought cycles which have led to the addictive behaviour, helping individuals to make connections between their thoughts, feelings and behaviours.  Addictive behaviours can often be viewed as coping strategies, CBT will help to form new more adaptive and helpful behaviours.'
    // },
    

]


module.exports = {
    treatments,
    services
}