import linkedinfooter from '../assets/linkedinfooter.svg'
const Footer = () => {
    return (
        <div>
            <div>
                <ul class='flex flex-row text-xs'>
                    <li class="flex flex-row"><img src={linkedinfooter} class='w-12'></img><span class='ml-1 opacity-60'>© 2021</span></li>
                    <li><a href="###" class='ml-2 opacity-60'>User Agreement</a></li>
                    <li><a href="###" class='ml-2 opacity-60'>Privacy Policy</a></li>
                    <li><a href="###" class='ml-2 opacity-60'>Community Guidelines</a></li>
                    <li><a href="###" class='ml-2 opacity-60'>Cookie Policy</a></li>
                    <li><a href="###" class='ml-2 opacity-60'>Copyright Policy</a></li>
                    <li><a href="###" class='ml-2 opacity-60'>Send Feedback</a></li>
                    <li><select class='bg-white ml-2 opacity-60'><option>Language</option><option>Hindi</option><option>Malayalam</option></select></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
