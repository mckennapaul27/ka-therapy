import depression from '../images/services-depression.jpg'
import anxiety from '../images/services-anxiety.jpg'
import ocd from '../images/services-ocd.jpg'
import trauma from '../images/services-trauma.jpg'
import selfEsteem from '../images/services-self-esteem.jpg'
import selfEsteem2 from '../images/services-self-esteem2.jpg'

import addiction from '../images/services-addiction.jpg'

const services = [
    { 
        title: 'All the Lorem Ipsum generators on the Internet', 
        src: 'calming-tree.jpg', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' ,
        id: 'CBT',
        date: 'Feb 15, 2020',
        url: '/blog/calming-tree'
    },
    { 
        title: 'All the Lorem Ipsum generators on the Internet', 
        src: 'calming-boat.jpg', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' ,
        id: 'CBT',
        date: 'Feb 15, 2020',
        url: '/blog/calming-tree'
    },
    { 
        title: 'All the Lorem Ipsum generators on the Internet', 
        src: 'calming-girl.jpg', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' ,
        id: 'CBT',
        date: 'Feb 15, 2020',
        url: '/blog/calming-tree'
    },
    { 
        title: 'All the Lorem Ipsum generators on the Internet', 
        src: 'calming-tree.jpg', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' ,
        id: 'CBT',
        date: 'Feb 15, 2020',
        url: '/blog/calming-tree'
    },
    { 
        title: 'All the Lorem Ipsum generators on the Internet', 
        src: 'calming-boat.jpg', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' ,
        id: 'CBT',
        date: 'Feb 15, 2020',
        url: '/blog/calming-tree'
    },
    { 
        title: 'All the Lorem Ipsum generators on the Internet', 
        src: 'calming-girl.jpg', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' ,
        id: 'CBT',
        date: 'Feb 15, 2020',
        url: '/blog/calming-tree'
    }       
]

const treatments = [
    {
        title: 'Depression and low mood',
        img: depression,
        desc: 'Depression is a debilitating mental health illness which has a devastating impact upon social connectedness, occupational functioning and overall decreases the quality of life of those who suffer from it.  Whilst depression is characterised by a range of symptoms which may include; difficulties concentrating, inability to make decisions, guilt, feelings of worthlessness, hopelessness and fatigue.   Depression, fear, and anxiety are some of the most common and uncomfortable emotions that we can experience at some point in our lives. Through CBT, we are able to help you recover motivation, perspective, and joy that you once had in your life.  '
    },
    {
        title: 'Anxiety Disorder',
        img: anxiety,
        desc: 'Anxiety can impact a large proportion of the population and is characterised by both uncontrollable racing thoughts along with physiological symptoms such as dizziness, palpitations, panic attacks, sweating, shaking and nausea.  Anxiety can occur in many different forms; CBT can help you to face your fears and deal with problems head on by breaking them in to small manageable chunks.  CBT encourages us to break negative cycles of behaviours that are often responsible for keeping the anxiety going.'
    },
    {
        title: 'Obsessive Compulsive Disorder (OCD)',
        img: ocd,
        desc: 'OCD is characterised by persistent and unwanted intrusions, which appear to the individual as a thought, doubt or image which provokes distress, this leads to compulsions which are repetitive and ritualistic behaviours carried out by the individual to neutralise the distress attached to the obsession.  There are several subtypes of OCD including: Checking Contamination Symmetry and ordering Ruminations / Intrusive Thoughts, Hoarding. CBT can help us to make sense of the meaning behind these intrusions, and understand the distress attached to them.  Additionally, CBT can help us to find alternative evidence against the usefulness of our previous habits and behaviours.'
    },
    {
        title: 'Trauma and PTSD',
        img: trauma,
        desc: 'Trauma is defined as an event which causes a psychological or emotional response to a situation or experience that is extremely distressing or disturbing, this can be as a result of losing someone close, marriage breakdown, illness or injury.  Post-traumatic Stress Disorder tends to occur when the individual relives the trauma and feels like the incident is still a current threat, the reliving can occur through flashbacks or nightmares and may lead to feelings of isolation, fear, irritability and guilt.  PTSD can also result in difficulties sleeping. CBT allows us to make sense of our traumatic memories in a safe environment, this in turn allows the memory to be process successfully and the reducing the distress and impact on day-to-day life. '
    },
    {
        title: 'Low-Self Esteem',
        img: selfEsteem2,
        desc: 'Low self-esteem is a recurrent thought of oneself as unlovable or inadequate.  This leads to reduced confidence and if it continues over a long period of time it can be detrimental impact on our mental health and day-to-day function.  Low self-esteem often begins in childhood.  Our friends, siblings, parents, teachers and social media send us both positive and negative messages about ourselves. CBT helps us to challenge these unhelpful thinking patterns using cognitive restructuring, activating self-care strategies  and self-compassion.  CBT also encourages us to challenge unhelpful coping strategies and self-critical thinking.'
    },
    {
        title: 'Addiction',
        img: addiction,
        desc: 'Addiction effects 1 in 3 people, it can be explained as not having control over doing something or taking something to the point that it could be harmful to your health.  Addictions can start by a substance or activity giving heightened feelings both physically and mentally which leaves the individual having powerful urges to do the activity again or take the substance again.  Addiction  means that by not having, or not engaging with the activity can cause withdrawal symptoms.  Because this can be unpleasant and often painful it becomes easier to carry on having or doing what you crave, and so the cycle is maintained. CBT aims to address the underlying beliefs and negative thought cycles which have led to the addictive behaviour, helping individuals to make connections between their thoughts, feelings and behaviours.  Addictive behaviours can often be viewed as coping strategies, CBT will help to form new more adaptive and helpful behaviours.'
    },
    

]


module.exports = {
    treatments,
    services
}