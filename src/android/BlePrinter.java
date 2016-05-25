/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
*/
package org.apache.cordova.bluetooth.BlePrinter;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import android.content.Context;
import com.citizen.jpos.command.CPCLConst;
import com.citizen.jpos.printer.CPCLPrinter;
import com.citizen.jpos.command.ESCPOSConst;

/**
 * This class provides access to vibration on the device.
 */
public class BlePrinter extends CordovaPlugin {

    /**
     * Constructor.
     */
    public BlePrinter() {
    }

    /**
     * Executes the request and returns PluginResult.
     *
     * @param action            The action to execute.
     * @param args              JSONArray of arguments for the plugin.
     * @param callbackContext   The callback context used when calling back into JavaScript.
     * @return                  True when the action was valid, false otherwise.
     */
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("isConnected")) {
            this.isConnected();
        }
        else if (action.equals("printText")) {
            JSONArray pattern = args.getJSONArray(0);
            int repeat = args.getInt(1);
            //add a 0 at the beginning of pattern to align with w3c
            long[] patternArray = new long[pattern.length()+1];
            patternArray[0] = 0;
            for (int i = 0; i < pattern.length(); i++) {
                patternArray[i+1] = pattern.getLong(i);
            }
            this.printText(patternArray);
        }
        else {
            return false;
        }

        // Only alert and confirm are async.
        callbackContext.success();

        return true;
    }

    //--------------------------------------------------------------------------
    // LOCAL METHODS
    //--------------------------------------------------------------------------


    public void isConnected() {
        // Manage connection checking here
       callbackContext.success();
    }


    public void printText(String deviceid, long[] pattern) {
       // Manage printing here
	   callbackContext.success();
    }


}
