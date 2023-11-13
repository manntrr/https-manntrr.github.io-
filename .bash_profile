#!/usr/bin/bash.exe
if [[ -d /c/Users/Public/OneDrive/Documents/Projects/BYU-I/manntrr.github.io/profile.d ]];
then
  PROFILE_SHELLS=`ls /c/Users/Public/OneDrive/Documents/Projects/BYU-I/manntrr.github.io/profile.d/*.sh 2>/dev/null|wc -l`
  if [[ ${PROFILE_SHELLS} == "" ]];
  then
    echo > /dev/null
  elif [[ ${PROFILE_SHELLS} -gt 0 ]];
  then
    for gitHubIOProfileFile in `ls /c/Users/Public/OneDrive/Documents/Projects/BYU-I/manntrr.github.io/profile.d/*.sh`;
    do
      source ${gitHubIOProfileFile};
    done;
  fi
fi
