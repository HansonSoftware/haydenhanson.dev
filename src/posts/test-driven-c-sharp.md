---
title: 'Test-Driven C# for Leetcode'
imgUrl: '/images/posts/test-driven-c-sharp/thumbnail.png'
publishedAt: '2024-08-19'
summary: 'This is a tutorial for setting up a TDD envirnoment with C# for solving leetcode problems locally on Linux or MacOS, lets learn together!'
---

# Introduction

I like to learn new programming languages by building an intermediate difficulty project, like a web server for example. However, before jumping into something like that I find it best to solve about 20 leetcode problems with the language so that I learn the syntax for the language and some tricks. I personally use [Neetcode](https://neetcode.io/roadmap) and work through the roadmap.

This blogpost is guide on how to set up your own C# test-driven environment for solving leetcode problems locally, I personally prefer to do it this way so that I can use the terminal.

## MacOS Specific Instructions

### 1.1 Install the DOTNET sdk

If you don't have homebrew, install it. It's a great package manager for MacOS.

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Go through the cli and press enter when prompted, you will need XCode command line tools, so be sure to accept when the homebrew cli asks.

If you are using an Apple silicon macbook, add `brew` to your PATH like so.

```sh
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

Now we're ready to install the .NET sdk.

```sh
brew install --cask dotnet-sdk
```

## Linux Specific Instructions

### 1.1 Install the DOTNET sdk

Install `dotnet` with your distros package manager.

I use Arch (btw) so I'll install it using pacman.

```sh
sudo pacman -S dotnet-runtime dotnet-sdk
```

## The rest of the instructions are for both Linux and MacOS

### 1.2 Create Git Repository

I'm going to call mine cs-neetcode.

```sh
mkdir cs-neetcode && cd cs-neetcode
git init
```

### 1.3 Modular File System

The repository is designed as follows:

```sh
cs-neetcode/
│
├── TwoSum/
│   ├── TwoSum.cs
│   └── TwoSumTests.cs
│
├── ValidAnagram/
│   ├── ValidAnagram.cs
│   └── ValidAnagramTests.cs
│
├── cs-neetcode.sln
└── .gitignore
```

You will have a unique directory for each problem you solve.

Now, create a solution file for the entire project:

> Run this command from the root directory of the repository.

```sh
dotnet new sln -n cs-neetcode
```

### 1.4 Preparing Solution Directories

For each problem, create a new class library and a corresponding test project.

Example for TwoSum:

```sh
dotnet new classlib -n TwoSum -o TwoSum
dotnet new xunit -n TwoSum.Tests -o TwoSum.Tests
```

Add the projects to the `solution`

**You will do this for each new leetcode problem you solve**

```sh
dotnet sln add TwoSum/TwoSum.csproj
dotnet sln add TwoSum.Tests/TwoSum.Tests.csproj
```

Link the test project to the problem project so that the tests can reference the solution.

```sh
dotnet add TwoSum.Tests/TwoSum.Tests.csproj reference TwoSum/TwoSum.csproj
```

**I have automated this process with the following shell script:**

```sh
#!/bin/sh

# add_project.sh

#####################################
# Run this script from cs-neetcode/ #
#####################################

# Get the problem name
echo "Enter the problem name (e.g., TwoSum):"
read PROBLEM_NAME

# Create the class library project
dotnet new classlib -n "$PROBLEM_NAME" -o "$PROBLEM_NAME"

# Create the xUnit test project
dotnet new xunit -n "${PROBLEM_NAME}.Tests" -o "${PROBLEM_NAME}.Tests"

# Add projects to the solution
dotnet sln add "$PROBLEM_NAME/$PROBLEM_NAME.csproj"
dotnet sln add "${PROBLEM_NAME}.Tests/${PROBLEM_NAME}.Tests.csproj"

# Add reference from the test project to the class library project
dotnet add "${PROBLEM_NAME}.Tests/${PROBLEM_NAME}.Tests.csproj" reference "$PROBLEM_NAME/$PROBLEM_NAME.csproj"

echo "Setup complete. Solution '$PROBLEM_NAME.sln' created with projects '$PROBLEM_NAME' and '${PROBLEM_NAME}.Tests'."
```

Be sure to make add_project.sh executable:

```sh
chmod +x add_project.sh
```

### 1.5 Writing Tests and C# Code

**TwoSum/TwoSum.cs**

```cs
public class TwoSumSolver
{
    public int[] TwoSum(int[] nums, int target)
    {
        // Create a dictionary to store the difference and its corresponding index
        Dictionary<int, int> numDict = new Dictionary<int, int>();

        // Iterate through the array
        for (int i = 0; i < nums.Length; i++)
        {
            // Calculate the difference needed to reach the target
            int difference = target - nums[i];

            // Check if the difference is already in the dictionary
            if (numDict.ContainsKey(difference))
            {
                // If found, return the indices of the current number and the difference
                return new int[] { numDict[difference], i };
            }

            // If not found, add the current number and its index to the dictionary
            if (!numDict.ContainsKey(nums[i]))
            {
                numDict.Add(nums[i], i);
            }
        }

        // If no solution is found, throw an exception (as per LeetCode's requirements)
        throw new ArgumentException("No two sum solution");
    }
}
```

**TwoSum.Tests/TwoSumTests.cs**

```cs
namespace TwoSum.Tests
{
    public class TwoSumTests
    {
        [Fact]
        public void TestTwoSum()
        {
            var solver = new TwoSumSolver();
            var result = solver.TwoSum(new int[] { 2, 7, 11, 15 }, 9);
            Assert.Equal(new int[] { 0, 1 }, result);
        }
    }
}
```

### 1.6 Running Tests

You can test the entire repository by running the following command from the root directory of the project.

```sh
dotnet test
```

To test an individual leetcode solution, run the same command from the corresponding directory.

For example:

**TwoSum.Tests/**

```sh
dotnet test
```

![dotnet test](/images/posts/test-driven-c-sharp/example.png)

### Git Repository

My remote repository can be found [here](https://github.com/HansonSoftware/cs-neetcode). Use [this commit](https://github.com/HansonSoftware/cs-neetcode/commit/9d6952e832c7d4b0a21dde9baea8753e170428b8) to avoid cloning all my solutions.

## _Thanks for reading!_
