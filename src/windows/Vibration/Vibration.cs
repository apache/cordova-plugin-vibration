using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Text;
using Windows.Phone.Devices.Notification;

namespace Vibration
{
    public sealed class Vibration
    {
        private static VibrationDevice _vibrationDevice = VibrationDevice.GetDefault();

        public static void vibrate([ReadOnlyArray()] object[] args)
        {
            // set default
            int duration = 200;

            try 
            {
                duration = Convert.ToInt32(args[0]);
            }
            catch 
            { 

            }

            _vibrationDevice.Vibrate(TimeSpan.FromMilliseconds(duration));
        }

        public static void cancelVibration()
        {
            _vibrationDevice.Cancel();
        }
    }
}
